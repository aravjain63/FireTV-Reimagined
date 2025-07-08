// HeroBackdrop.tsx
const HeroBackdrop = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[120vh] z-0">
      <img
        src="https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg"
        alt="Backdrop"
        className="w-full h-full object-cover"
      />
      
      {/* Black fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black animate-fadeInDown" />
    </div>
  );
};

export default HeroBackdrop;
