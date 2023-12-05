import { FacebookOutlined, Google } from "@mui/icons-material"
import { ButtonBorder } from "../../../component/elements/button-border"
import Logo from "../../../assets/logo.svg"

const Login = () => {
    return <div className="flex items-center px-6  absolute h-full justify-center w-full">
        <div className="max-w-lg space-y-[40px]">
            <div className="flex justify-center">
                <figure><img width={350} src={Logo} className='Card-Image' /></figure>
            </div>
            <div>
                <form className="space-y-4">
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email" className="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full light:placeholder-gray-600 light:bg-red-900 light:text-gray-300 light:border-red-700 focus:border-red-400 lgiht:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" className="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full light:placeholder-gray-600 light:bg-gray-900 light:text-gray-300 light:border-gray-700 focus:border-red-400 light:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <ButtonBorder fullWidth>LOGIN</ButtonBorder>
                    </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400">------------------------or------------------------</p>
                <div className="mt-6 space-x-4 flex justify-center">
                    <ButtonBorder iconLeft={<FacebookOutlined></FacebookOutlined>} color="inherit" variant="outlined" >Login with Facebook</ButtonBorder>
                    <ButtonBorder iconLeft={<Google></Google>} color="inherit" variant="outlined">Login with Google</ButtonBorder>
                </div>
                <p className="mt-6 text-sm text-center text-gray-400">By signing in, you agree to our Terms and <b>Privacy Policy.</b></p>
                <p className="mt-6 text-sm text-center text-gray-400">This site is protected by reCAPTCHA Enterprise and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</p>
            </div>
        </div>
    </div>
}

export default Login