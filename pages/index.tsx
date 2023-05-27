import Image from 'next/image'
import {Inter} from 'next/font/google'
import DatePicker from '@/components/DatePicker'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <DatePicker/>
        </main>
    )
}
