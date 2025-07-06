// components/Separator.tsx

export default function Separator() {
  return (
    <div className='w-full bg-[#F8F8F8] py-16 lg:py-24 relative overflow-hidden'>
      <div
        className='absolute inset-0 whitespace-nowrap text-[80px] lg:text-[130px] font-extrabold text-[#097EC3] opacity-[0.09] animate-slide'
        style={{
          fontFamily: '"Exo", sans-serif',
          lineHeight: "1",
        }}
      >
        B Logistics soluciones B Logistics soluciones B Logistics soluciones B
        Logistics soluciones
      </div>
    </div>
  );
}
