import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import { ButtonBorder } from '../../../component/elements/button-border';
import Joi from 'joi';
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
function TambahStage() {
  const location = useLocation()
  const navi = useNavigate()

  const parts = location.pathname.split('/');

  // Function to check if a part of the URL is a MongoDB ObjectId
  const isObjectId = (part) => /^[0-9a-fA-F]{24}$/.test(part);

  // Find the first two occurrences of ObjectIds in the URL
  const objectIds = parts.filter(part => isObjectId(part));


  const type = location.pathname.split("/").pop()
  const [formValues, setFormValues] = useState({
    stage: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    stage: Joi.string().required().label('Stage'),
    description: Joi.string().required().label('Deskripsi'),
  });

  const validate = () => {
    const { error } = schema.validate(formValues, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };

  useEffect(() => {
    if (type !== "add") {
      instance.get(`/admin/stage/${objectIds[2]}`).then(d => {
        console.log(d.data.items.stage)
        setFormValues({
          stage: d.data.items.stage,
          description: d.data.items.description,
        })
      })
    }
  }, [])

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const errors = validate();

      console.log(errors)
      setErrors(errors || {});
      if (errors) return;

      // Handle form submission logic here

      let value = type === "add" ? {
        ...formValues,
        category_id: objectIds[0],
        unit_id: objectIds[1]
      } : {
        ...formValues,
        id: objectIds[2]
      }

      let pos = type === "add" ? await instance.post("/admin/stage/create", value) : await instance.put(`/admin/stage/${objectIds[2]}/edit`, value)
      if (pos.status === 201) {
        Swal.fire({
          title: "BERHASIL",
          icon: "success",
          text: "Berhasil Menambahkan stage",
          didClose: () => {
            // window.location.href = `/admin/halamankategori/${name}/${id}`
            navi(-1)
          }
        })
      }

      if (pos.status === 200) {
        Swal.fire({
          title: "BERHASIL",
          icon: "success",
          text: "Berhasil Edit stage",
          didClose: () => {
            navi(-1)
            // window.location.href = `/admin/halamankategori/${name}/${idEdit}`
          }
        })
      }
      console.log(pos)
    } catch (error) {
      Swal.fire({
        title: "ERROR!!",
        icon: "error",
        text: error?.response?.data?.message
      })
      console.log(error)
    }

  };

  const handleChange = ({ target }) => {
    const newData = { ...formValues };
    newData[target.name] = target.value;
    setFormValues(newData);

  };
  return (
    <>
      <div className='card flex flex-col bg-white mt-4 pb-4'>
        <div className='header-card w-full h-16 bg-red-700 text-white rounded-t-lg'>
          <div className="ml-4 mt-4">{type === "add" ? "Tambahkan" : "Edit"} Stage</div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-4 container py-6 gap-6">
          <div className="col-span-1 flex items-center">
            <div>Stage</div>
          </div>
          <div className="col-span-3">
            <TextField
              fullWidth
              name="stage"
              value={formValues.stage}
              onChange={handleChange}
              error={Boolean(errors.stage)}
              helperText={errors.stage}
            />
          </div>

          <div className="col-span-1 flex items-center">
            <div>Deskripsi</div>
          </div>
          <div className="col-span-3">
            <TextField
              fullWidth
              name="description"
              value={formValues.description}
              onChange={handleChange}
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </div>
          <div className="mt-4 flex items-center justify-center col-span-4">
            <ButtonBorder type="submit">Simpan</ButtonBorder>
          </div>
        </form>
      </div>
    </>
  )
}

export default TambahStage;
