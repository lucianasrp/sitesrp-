import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/home-hero.png"
      width={1024}
      height={1024}
      alt="Picture of the author"
			priority
    />
  )
}