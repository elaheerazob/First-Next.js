"use client"

const page = ({params}) => {
    console.log(params);
    return (
        <div>
            <h1>This is student {params.studentlist}</h1>
        </div>
    );
};

export default page;