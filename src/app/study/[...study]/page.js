"use client"
const page = ({params}) => {
    console.log(params);
    return (
        <div>
            <h1>This is lecture {params.study[0]}</h1>
            <h1>This is lecture {params.study[1]}</h1>
        </div>
    );
};

export default page;