import React from "react";

type Props = {
	img: string;
	alt?: string;
};

const Avartar = ({ img, alt }: Props) => {
	return (
		<div className="rounded-full relative overflow-hidden w-full pt-[100%]">
			<div className=" absolute inset-0">
				<img src={img} alt={alt || img} />
			</div>
		</div>
	);
};

export default Avartar;
