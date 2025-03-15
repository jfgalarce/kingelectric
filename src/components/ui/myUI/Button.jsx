import Link from 'next/link'
const Button = ({children}) => {
  return (
    <Link href="/" className='p-2 bg-red-600 rounded-lg shadow text-white font-medium text-base border border-red-700'>{children}</Link>
  )
}
export default Button