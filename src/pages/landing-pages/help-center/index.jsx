import { Card } from "@mui/material"
import { Layout } from "../../../component/layout"
import Jawir from "../../../assets/jawir.png"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ButtonBorder } from "../../../component/elements/button-border";
const HelpCenter = () => {
    return <Layout>
        <div className="w-full min-h-[600px] flex flex-col py-10 bg-red-100">
            <div className="container mx-auto flex- 1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2>HELP CENTER</h2>
                <Card className="w-full p-6 space-y-4">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1  justify-center hidden lg:flex items-center">
                            <img className="h-full" src={Jawir}></img>
                        </div>
                        <div className="col-span-full lg:col-span-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="Nama Depan"
                                        variant="standard"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="Nama Belakang"
                                        variant="standard"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        fullWidth
                                        type="email"
                                        id="outlined-required"
                                        label="Email"
                                        variant="standard"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="Phone Number"
                                        type="number"
                                        variant="standard"
                                    />
                                </div>
                                <div className="col-span-full">
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Pilih Subject?</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Tentang Aplikasi" />
                                            <FormControlLabel value="male" control={<Radio />} label="Masalah Pengguna" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="col-span-full">
                                    <p>Deskripsi </p>
                                    <textarea className="w-full min-h-[250px] border p-4" placeholder="Tulis pesan anda..."></textarea>
                                </div>
                                <div>
                                    <ButtonBorder>KIRIM</ButtonBorder>
                                </div>
                            </div>

                        </div>
                    </div>
                </Card>

            </div>
        </div>
    </Layout>
}

export default HelpCenter