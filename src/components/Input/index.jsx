import {IconContainer,InpuText,InputContainer} from './styles';

import { Controller } from 'react-hook-form';

const Input = ({leftIcon, name, control, ...rest}) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer> {leftIcon} </IconContainer>) : null}
            <Controller
            name={name}
            control={control}
            rules={{required: true}}
            render={({ field }) => <InpuText {...field} {...rest} />}

            />

        </InputContainer>
    );

}


export { Input };

