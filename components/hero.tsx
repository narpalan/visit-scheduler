import Image from 'next/image';

export default function Hero(): React.JSX.Element {
    return (
        <div className='w-full relative h-screen col-span-4 lg:col-span-12'>
            <Image
                src="/hero-desmond.webp"
                priority                
                fill             
                alt="Image from HERO section portraying a teddybear on a plane."
                className="object-cover"
            />                        
        </div>
    );
}