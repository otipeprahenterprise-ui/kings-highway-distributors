"use client"

import { motion } from "framer-motion"

export function WhatsAppButton() {
  const phoneNumber = "15168595438"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.767-.872-2.036-.969-.269-.099-.465-.15-.665.15-.199.301-.771.969-.944 1.168-.173.199-.346.225-.647.075-.3-.15-1.267-.467-2.414-1.488-.891-.795-1.492-1.776-1.667-2.076-.175-.301-.019-.464.13-.613.135-.134.3-.349.451-.523.15-.174.199-.299.3-.499.1-.199.05-.376-.025-.525-.075-.15-.665-1.597-.91-2.185-.24-.577-.482-.499-.665-.508-.172-.008-.37-.01-.568-.01-.198 0-.521.074-.794.373-.272.299-1.039 1.015-1.039 2.476 0 1.46 1.063 2.871 1.211 3.07.148.199 2.092 3.194 5.068 4.479.708.305 1.26.488 1.691.624.711.226 1.358.194 1.87.118.571-.085 1.767-.721 2.016-1.417.249-.696.249-1.294.175-1.417-.074-.124-.272-.198-.574-.348zM12.004 2C6.48 2 2.01 6.47 2.01 11.99c0 1.76.46 3.42 1.26 4.87l-1.34 4.88 5-1.31c1.41.77 3.02 1.22 4.7 1.22 5.52 0 9.99-4.47 9.99-9.99S17.524 2 12.004 2zM12.004 20.14c-1.54 0-3.04-.41-4.35-1.2l-.31-.19-3.23.85.86-3.15-.2-.32c-.86-1.37-1.32-2.96-1.32-4.61 0-4.73 3.85-8.58 8.58-8.58s8.58 3.85 8.58 8.58-3.85 8.58-8.58 8.58z" />
      </svg>
    </motion.a>
  )
}
