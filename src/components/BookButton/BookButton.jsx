import React from 'react';
import {Button} from "flowbite-react";

const BookButton = ({title}) => {
    return (
        <Button className='bg-orange-500 py-6 px-10 w-fit uppercase text-lg text-white hover:bg-orange-600 transition'>
            {title}
        </Button>
    );
};

export default BookButton;