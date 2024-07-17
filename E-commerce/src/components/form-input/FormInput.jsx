import './FormInput.styles.scss'
function FormInput({ label, type, name, id, onChangeHandler, value }) {
    return (
        <div className="group">
            <input type={type} name={name} id={id} required onChange={onChangeHandler} />
            <label htmlFor={id} className={value.length && 'shrink'}>{label}</label>
        </div>
    );
}

export default FormInput;