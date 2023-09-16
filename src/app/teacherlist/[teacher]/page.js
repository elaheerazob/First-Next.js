"use client"

const page = ({params}) => {
    console.log(params);
    return (
        <div>
            <h2>This is Teacher{params.teacher}</h2>
        </div>
    );
};

export default page;