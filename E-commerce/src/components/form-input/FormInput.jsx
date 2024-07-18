import './FormInput.styles.scss'
function FormInput({ label, type, name, onChangeHandler, value }) {
    return (
        <div className="group">
            <input type={type} name={name} required onChange={onChangeHandler} />
            <label className={value.length && 'shrink'}>{label}</label>
        </div>
    );
}

export default FormInput;