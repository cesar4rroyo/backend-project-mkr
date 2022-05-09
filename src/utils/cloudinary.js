import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export function uploads(file, folder) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          url: result.secure_url,
          cloudinaryId: result.public_id,
          duration: result?.duration
        })
      },
      {
        resource_type: 'auto',
        folder: process.env.NODE_ENV === 'production' ? folder : `${folder}-dev`
      }
    )
  })
}

export default cloudinary