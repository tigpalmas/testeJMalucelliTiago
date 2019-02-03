import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '@material-ui/core/TextField';

// Will work fine
const InputMaks = ({value, onChange, error, messageError}) => (

    <InputMask
        maskChar={''}
        mask="99.999.999/9999-99" value={value}
        onChange={onChange}>
        {(inputProps) =>
            <div>
                <TextField
                    {...inputProps}
                    id="outlined-search"
                    label="Digite o número do CNPJ"
                    error={error}
                    type="search"

                    margin="normal"
                    variant="outlined"
                />
                <div style={{fontSize: 10, color: 'red', fontWeight: '700'}}>{messageError}</div>
            </div>
        }

    </InputMask>
);

export default InputMaks;