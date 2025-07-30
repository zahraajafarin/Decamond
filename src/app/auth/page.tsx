import Form from "@/components/auth/Form"
import Image from "next/image"

function page() {
  return (
    <div className="login-page">
        <div className="login-box">
            <Image 
                src={'/banner.png'}
                width={400}
                height={189}
                alt='banner'
                className="login-image"
                priority
            />

            <h2 className="login-text">Login</h2>
            <p>Please input your phone number.</p>

            <Form />
        </div>
    </div>
  )
}

export default page