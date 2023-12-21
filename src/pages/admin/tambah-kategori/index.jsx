import React, { useState } from 'react';
import Joi from 'joi';
import { FormControl, Select, MenuItem } from '@mui/material';
import { ButtonBorder } from '../../../component/elements/button-border';
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'

function TambahKategori() {
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    category: Joi.string().required().label('Category'),
  });

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const result = schema.validate({ category });
      const { error } = result;

      if (error) {
        setErrors({ category: error.details[0].message });
        return;
      }

      setErrors({});

      await instance.post("/admin/category/create", { name: category })

      Swal.fire({
        title: "BERHASIL",
        icon: "success",
        text: "Success Add Category",
        didClose: () => {
          window.location.href = "/admin/halamankategori"
        }
      })


    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error?.response?.data?.message
      })
    }

    // Process the selected category
    // Add your form submission logic here

  };

  return (
    <>
      <div className='card flex flex-col bg-white mt-4 '>
        <div className='header-card w-full h-16 bg-red-700 text-white rounded-t-lg '>
          <div className="ml-4 mt-4">Tambahkan Kategori</div>
        </div>
        <form className='body p-4 bg-white-300' onSubmit={handleSubmit}>
          <div className='text-black flex gap-4 container'>
            <div className="pt-4">Kategori</div>
            <div className="flex-1">
              <FormControl fullWidth>
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  displayEmpty
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value={"Beginner"}>Beginner</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Advanced"}>Advanced</MenuItem>
                </Select>
              </FormControl>
              {errors.category && <div className="text-red-500 pt-2 text-xs">{"Kategori wajib di isi."}</div>}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center ">
            <ButtonBorder type="submit">Simpan</ButtonBorder>
          </div>
        </form>
      </div>
    </>
  )
}

export default TambahKategori;
