import {useState} from "react"
import {motion} from "framer-motion"
import axios from "axios"
import {useAuth} from "@/hooks/auth"

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [email, token] = useAuth()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        setSelectedFile(file || null)
    }

    const handleFileUpload = async () => {
        if (selectedFile) {

            const formData = new FormData()
            formData.append('file', selectedFile)

            formData.append('email', email ? email : "guest")

            const scrapeId = Date.now() // Get the current date as a number for scrapeId

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/ml/upload/run_analysis/${scrapeId}`,
                formData)

            console.log(response)
        }
    }

    return (
        <div className='flex flex-col gap-5 items-center pt-8 mt-1 mx-8 border-t-[2px] border-gray-300'>
            <div className='text-violet-600 text-xl font-semibold'>
                Upload Local File
            </div>

            <div className='flex flex-col gap-1 justify-center items-center p-4 bg-violet-50 rounded-lg shadow'>
                <label
                    htmlFor="openfile"
                    className='text-lg px-6 py-2 bg-violet-500 w-48 flex justify-center items-center rounded-lg
                   shadow-md cursor-pointer select-none text-gray-50 hover:bg-violet-700 transition duration-300'>
                    Select File
                </label>

                <input type="file"
                       id='openfile'
                       accept=".csv"
                       onChange={handleFileChange}
                       hidden
                />

                <span className='truncate'>
                    {selectedFile?.name}
                </span>
            </div>

            <motion.button
                onClick={handleFileUpload}
                whileTap={{
                    scale: 0.9
                }}
                className='bg-violet-600 px-6 w-48 py-4 rounded-lg shadow-lg text-gray-50 uppercase text-xl font-semibold
                tracking-wide hover:bg-violet-700 transition duration-300 hover:shadow-xl'>
                Upload
            </motion.button>
        </div>
    )
}

export default FileUploader