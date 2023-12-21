import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ButtonBorder } from '../../../component/elements/button-border';
import Joi from 'joi';
import { Delete } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'

function TambahSoal() {
  const navi = useNavigate()
  const location = useLocation()
  const type = location.pathname.split("/").pop()

  const parts = useLocation().pathname.split("/")

  // Function to check if a part of the URL is a MongoDB ObjectId
  const isObjectId = (part) => /^[0-9a-fA-F]{24}$/.test(part);

  // Find the first two occurrences of ObjectIds in the URL
  const objectIds = parts.filter(part => isObjectId(part));


  const schema = Joi.object({
    title: Joi.string().required().messages({
      'string.empty': 'Judul diperlukan.'
    }),

    content: Joi.string().required().messages({
      'string.empty': 'Konten pertanyaan diperlukan.'
    }),

    score: Joi.number().required().messages({
      'number.base': 'Nilai harus berupa angka.'
    }),

    choice: Joi.array().items(Joi.object({
      id: Joi.string().required(), // Definisi untuk id
      title: Joi.string().required()
    })).required().messages({
      'array.base': 'Pilihan harus berupa array.',
      'object.base': 'Setiap jawaban harus memiliki judul.'
    }),
    answer_id: Joi.string().required().messages({
      'string.empty': 'ID Jawaban diperlukan.'
    }),
  });

  const generateId = () => {
    return `id-${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
    score: '',
    choice: [{ id: generateId(), title: '' }],
    answer_id: ''
  });



  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    // Hapus error terkait saat field diubah
    if (errors[event.target.name]) {
      setErrors({ ...errors, [event.target.name]: undefined });
    }
  };

  const handleChoiceChange = (index, event) => {
    const newChoices = formValues.choice.map((choice, i) => {
      if (i === index) {
        return { ...choice, title: event.target.value };
      }
      return choice;
    });
    setFormValues({ ...formValues, choice: newChoices });
    // Hapus error terkait saat choice diubah
    const errorKey = `choice[${index}]`;
    if (errors[errorKey]) {
      setErrors({ ...errors, [errorKey]: undefined });
    }
  };


  const addChoice = () => {
    setFormValues({ ...formValues, choice: [...formValues.choice, { title: '', id: generateId() }] });
  };

  const removeChoice = (index) => {
    const newChoices = formValues.choice.filter((_, i) => i !== index);
    setFormValues({ ...formValues, choice: newChoices });
  };

  const indexToLabel = (index) => {
    return String.fromCharCode(65 + index);
  };

  const paramType = type === "add"

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = schema.validate(formValues, { abortEarly: false });

    console.log(error)
    if (error) {
      const validationErrors = error.details.reduce((acc, current) => {
        if (current.path[0] === 'choice' && current.path.length > 1) {
          // Mengubah error choice[index] menjadi label alfabetik
          const choiceIndex = current.path[1];
          acc[`choice[${choiceIndex}]`] = `Pilihan ${indexToLabel(choiceIndex)}: Wajib di isi`;
        } else {
          acc[current.path[0]] = current.message;
        }
        return acc;
      }, {});
      setErrors(validationErrors);
    } else {
      // Submit form jika tidak ada error


      const data = {
        ...formValues,
        category_id: objectIds[0],
        unit_id: objectIds[1],
        stage_id: objectIds[2]
      }
      try {
        let post
        if (paramType) {
          post = await instance.post("/admin/questions/create", data)
        } else {
          post = await instance.put(`/admin/questions/${objectIds[3]}/edit`, data)

        }
        if (post.status === 200) {
          Swal.fire({
            title: "BERHASIL",
            icon: "success",
            text: "Berhasil Edit Soal",
            didClose: () => {
              navi(-1)
            }
          })
        } else {
          Swal.fire({
            title: "BERHASIL",
            icon: "success",
            text: "Berhasil Menambahkan Soal",
            didClose: () => {
              navi(-1)
            }
          })
        }

      } catch (error) {
        Swal.fire({
          title: "GAGAL",
          icon: "error",
          text: "Soal sudah pernah di buat",

        })
      }
      setErrors({});
    }
  };

  useEffect(() => {
    if (!paramType) {
      instance.get(`/admin/questions/id/${objectIds[3]}`).then(d => {
        console.log(d)
        setFormValues({
          title: d.data.items.title,
          content: d.data.items.content,
          choice: d.data.items.choice.map(a => ({
            id: a.id,
            title: a.title
          })),
          answer_id: d.data.items.answer_id,
          score: d.data.items.score,
        })
      })
    }
  }, [])

  return (
    <>
      <div className='card flex flex-col bg-white mt-4 pb-4'>
        <div className='header-card w-full h-16 bg-red-700 text-white rounded-t-lg'>
          <div className="ml-4 mt-4">{paramType ? "Tambahkan" : "Edit"}  Soal</div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-4 container py-6 gap-6">

          <div className="col-span-1 flex items-center">
            <div>Judul</div>
          </div>
          <div className="col-span-3">
            <TextField
              size="medium"
              fullWidth
              name="title"
              value={formValues.title}
              onChange={handleChange}
              error={Boolean(errors.title)}
              helperText={errors.title}
            />
          </div>

          {/* Konten */}
          <div className="col-span-1 flex items-center">
            <div>Konten</div>
          </div>
          <div className="col-span-3">
            <TextField
              size="medium"
              fullWidth
              name="content"
              value={formValues.content}
              onChange={handleChange}
              error={Boolean(errors.content)}
              helperText={errors.content}
            />
          </div>
          {/* Skor */}
          <div className="col-span-1 flex items-center">
            <div>Skor</div>
          </div>
          <div className="col-span-3">
            <TextField
              size="medium"
              fullWidth
              name="score"
              type="number"
              value={formValues.score}
              onChange={handleChange}
              error={Boolean(errors.score)}
              helperText={errors.score}
            />
          </div>
          <div className="col-span-1 flex items-center">
            <div>Jawaban</div>
          </div>
          <div className="col-span-3">
            <FormControl fullWidth>
              {/* <InputLabel id="answer-id-label">Jawaban</InputLabel> */}
              <Select
                // labelId="answer-id-label"
                name="answer_id"
                value={formValues.answer_id}
                // label="Jawaban"
                onChange={handleChange}
                error={Boolean(errors.answer_id)}
              >
                {formValues.choice.map((choice, index) => (
                  <MenuItem key={choice.id} value={choice.id}>{`Pilihan ${indexToLabel(index)}`}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Pilihan */}
          <div className="col-span-1 flex items-center">
            <div>Pilihan Ganda</div>
          </div>
          {formValues.choice.map((choice, index) => (
            <div key={index} className="col-span-4 flex items-center gap-4">
              <TextField
                size="medium"
                fullWidth
                value={choice.title}
                onChange={(e) => handleChoiceChange(index, e)}
                error={Boolean(errors[`choice[${index}]`])}
                helperText={errors[`choice[${index}]`] || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {indexToLabel(index)}
                    </InputAdornment>
                  ),
                }}
              />
              <ButtonBorder onClick={() => removeChoice(index)}>
                <Delete />
              </ButtonBorder>
            </div>
          ))}

          <div className="col-span-4 flex items-center">
            <ButtonBorder onClick={addChoice}>Tambah Jawaban</ButtonBorder>
          </div>


          {/* Tombol Simpan */}
          <div className="mt-4 flex items-center justify-center col-span-4">
            <ButtonBorder type="submit">Simpan</ButtonBorder>
          </div>
        </form>
      </div>
    </>
  );
}

export default TambahSoal;
