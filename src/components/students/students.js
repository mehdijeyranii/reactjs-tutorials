import "./students.css"

const Students = () => {
    return (
        <div className="students">
            <label>شماره دانش آموزی : 1</label>
            <label>نام و نام خانوادگی</label>
            <input type="text" />

            <label>کلاس</label>
            <input type="text" />

            <label>شماره تلفن</label>
            <input type="number" />

            <label>ایمیل</label>
            <input type="email" />
        </div>
    );
};

export default Students;
