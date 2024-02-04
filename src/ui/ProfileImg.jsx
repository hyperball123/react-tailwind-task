// eslint-disable-next-line
function ProfileImg({ imageUrl, altText }) {
  return (
    <div className="flex items-center">
      <div className="rounded-full overflow-hidden border-1 border-slate-900">
        <img
          src={imageUrl}
          alt={altText}
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      {/* You can add a tooltip or other details here if needed */}
    </div>
  );
}

export default ProfileImg;
