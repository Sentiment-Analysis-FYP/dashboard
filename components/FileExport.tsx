import {motion} from "framer-motion";

interface FileExportProps {
    saveFileAsCsv: () => void
}

const FileExport = (props: FileExportProps) => {
    const {saveFileAsCsv} = props
    return (
        <motion.div
            whileTap={{
                scale: 0.9,
                transition: {
                    delay: 0
                }
            }}
            className=' bg-violet-500 text-gray-50 p-3 rounded-lg flex justify-center items-center hover:bg-violet-700 hover:text-white
        cursor-pointer select-none transition duration-200'
            onClick={saveFileAsCsv}>
            Export Data as CSV
        </motion.div>
    )
}

export default FileExport