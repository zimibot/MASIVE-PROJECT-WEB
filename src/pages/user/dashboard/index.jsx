import { ButtonBorder } from '../../../component/elements/button-border';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Sunda from "../../../assets/Sunda.png"
import { CardActionArea } from '@mui/material';
import Jabar from "../../../assets/jabar.png";
import Garut from "../../../assets/garut.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Emas from '../../../assets/icon/emas.jpg';
import Silver from '../../../assets/icon/silver.jpg';
import Coklat from '../../../assets/icon/coklat.jpg';




function Welcome(props) {
    return <h1 className='text-white'>Hallo, {props.name}!</h1>;
}

function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }} >
                        <Card sx={{ maxWidth: 745, display: 'flex', flexDirection: 'row' }} className='bg-gradient-to-b from-red-500 to-red-300 rounded-[30px] shadow'>
                            <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Welcome name="Yoga" />
                                    </Typography>
                                    <Typography className='text-white' variant='h5' gutterBottom component="div" >
                                        Mau Belajar Apa Hari Ini?
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <img src={Sunda} width={190} />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <div>
                            <p className='text-black text-xl font-semibold'>Bahasa yang di pelajari</p>
                        </div>
                        <ButtonBorder
                            className=' w-[738px]  h-[171px] '
                            iconLeft={<img src={Jabar}></img>}
                            iconRight={<KeyboardArrowRightIcon className='bg-neutral-300 rounded-full ms-11' color='action'></KeyboardArrowRightIcon>}>
                            <div className='flex flex-col items-start'>
                                <p className='normal-case text-xl'>Bahasa Jawa</p>
                                <div className='flex flex-row items-center gap-3'>
                                    <div className="w-[357px] h-[9px] bg-zinc-300 rounded-[10px]">
                                        <div className="w-[188px] h-[9px] bg-amber-500 rounded-[10px]"></div>
                                    </div>
                                    <p>60%</p>

                                </div>
                                <p className="text-xs normal-case font-thin">Stage 3</p>

                            </div>

                        </ButtonBorder>
                        <ButtonBorder
                            className=' w-[738px]  h-[171px] '
                            iconLeft={<img src={Garut}></img>}
                            iconRight={<KeyboardArrowRightIcon className='bg-neutral-300 rounded-full ms-11' color='action'></KeyboardArrowRightIcon>}>
                            <div className='flex flex-col items-start'>
                                <p className='normal-case text-xl'>Bahasa Jawa</p>
                                <div className='flex flex-row items-center gap-3'>
                                    <div className="w-[357px] h-[9px] bg-zinc-300 rounded-[10px]">
                                        <div className="w-[89px] h-[9px] bg-amber-500 rounded-[10px]"></div>
                                    </div>
                                    <p>20%</p>

                                </div>
                                <p className="text-xs normal-case font-thin">Stage 1</p>

                            </div>

                        </ButtonBorder>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className="container flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <div className="w-[156px] h-[156px] relative">
                                <div className="w-[156px] h-[156px] left-0 top-0 absolute bg-red-500 rounded-full"></div>
                                <div className="w-[150px] h-[150px] left-[3px] top-[3px] absolute bg-zinc-300 rounded-full"></div>
                            </div>
                            <p className="text-black text-xl font-semibold font-['Inter'] leading-[18px] tracking-tight mt-5">Galih Yoga</p>
                            <p className="text-black text-xs font-medium font-['Inter'] leading-[18px] tracking-tight mt-2">galihyoga01</p>
                        </div>
                        <div className="w-[292px] h-[461px] bg-white rounded-[10px] border-2 border-gray-200 mt-16">
                            <p className="text-center">Teman</p>
                            <table className="table-auto text-xs mt-4">
                                <tr className="text-xs font-semibold gap-4">
                                    <td className='px-2 py-2'><img src={Emas} alt="" /></td>
                                    <td className='px-2 py-2'>
                                        <div className="w-[33px] h-[33px] bg-fuchsia-400 rounded-full relative">
                                            <p className="absolute top-2 left-[10px] text-white text-[15px] font-semibold">G</p>
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white absolute right-0 bottom-0"></div>
                                        </div>
                                    </td>
                                    <td className='px-2 py-2'>Lockyer</td>
                                    <td className='ps-16 py-2'>75 XP</td>
                                </tr>
                                <tr className="text-xs font-semibold gap-4">
                                    <td className='px-2 py-2'><img src={Silver} alt="" /></td>
                                    <td className='px-2 py-2'>
                                        <div className="w-[33px] h-[33px] bg-lime-500 rounded-full relative">
                                            <p className="absolute top-2 left-[10px] text-white text-[15px] font-semibold">Y</p>
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white absolute right-0 bottom-0"></div>
                                        </div></td>
                                    <td className='px-2 py-2'>Yoga</td>
                                    <td className='ps-16 py-2'>75 XP</td>
                                </tr>
                                <tr className="text-xs font-semibold gap-4">
                                    <td className='px-2 py-2'><img src={Coklat} alt="" /></td>
                                    <td className='px-2 py-2'>
                                        <div className="w-[33px] h-[33px] bg-violet-500 rounded-full relative">
                                            <p className="absolute top-2 left-[10px] text-white text-[15px] font-semibold">A</p>
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white absolute right-0 bottom-0"></div>
                                        </div>
                                    </td>
                                    <td className='px-2 py-2'>Abimanyu</td>
                                    <td className='ps-16 py-2'>75 XP</td>
                                </tr>
                                <tr className="text-xs font-semibold gap-4">
                                    <td className='px-3 py-2'>4</td>
                                    <td className='px-2 py-2'>
                                        <div className="w-[33px] h-[33px] bg-amber-500 rounded-full relative">
                                            <p className="absolute top-2 left-[10px] text-white text-[15px] font-semibold">F</p>
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white absolute right-0 bottom-0"></div>
                                        </div>
                                    </td>
                                    <td className='px-2 py-2'>Fawaz</td>
                                    <td className='ps-16 py-2'>75 XP</td>
                                </tr>
                                <tr className="text-xs font-semibold gap-4">
                                    <td className='px-3 py-2'>5</td>
                                    <td className='px-2 py-2'>
                                        <div className="w-[33px] h-[33px] bg-red-400 rounded-full relative">
                                            <p className="absolute top-2 left-[10px] text-white text-[15px] font-semibold">M</p>
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white absolute right-0 bottom-0"></div>
                                        </div>
                                    </td>
                                    <td className='px-2 py-2'>Mubarak</td>
                                    <td className='ps-16 py-2'>75 XP</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard