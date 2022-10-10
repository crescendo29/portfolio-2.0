import React from "react";
import {
	PhoneIcon,
	MapPinIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/solid";
import {
	useForm,
	SubmitHandler,
} from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function ContactMe({}: Props) {
	const { register, handleSubmit } =
		useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (
		formData
	) => {
    window.location.href = `mailto:beauverger.rodolphe@orange.fr?subject=${formData.subject}&body=Bonjour, mon nom est ${formData.name}, ${formData.message} (${formData.email})`
  };
	return (
		<div className='h-screen flex flex-col relative text-center md:text-left md:flex-row lg:max-w-7xl px-10 justify-evenly mx-auto items-center w-full'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				contact
			</h3>

			<div className='flex flex-col space-y-3 md:space-y-10'>
				<h4 className='mx-auto text-sm lg:text-4xl font-semibold'>
					J&apos;ai peut-être ce dont vous avez besoin,
					<span className='decoration-[#F7AB0A]/50 underline'>
						{" "}
						échangeons.
					</span>
				</h4>

				<div className='space-y-10'>
					<div className='flex items-center space-x-3 md:space-x-5 justify-center'>
						<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>
							06 16 31 19 16
						</p>
					</div>

					<div className='flex items-center space-x-3 md:space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-xl'>
							beauverger.rodolphe@orange.fr
						</p>
					</div>

					<div className='flex items-center space-x-3 md:space-x-5 justify-center'>
						<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>
							06 16 31 19 16
						</p>
					</div>
				</div>
				
				
					<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 mx-auto w-fit px-6'
				>
					<div className='flex flex-col md:flex-row md:space-x-2'>
						<input
							{...register("name")}
							placeholder='Nom'
							className='contactInput mb-2 md:mb-0'
							type='text'
						/>
						<input
							{...register("email")}
							placeholder='Email'
							className='contactInput'
							type='email'
						/>
					</div>

					<input
						{...register("subject")}
						placeholder='Sujet'
						className='contactInput'
						type='text'
					/>

					<textarea
						{...register("message")}
						placeholder='Message'
						className='contactInput'
					></textarea>
					<button
						type='submit'
						className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'
					>
						Submit
					</button>
				</form>
				

				
			</div>
		</div>
	);
}

export default ContactMe;
