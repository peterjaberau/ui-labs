import { FC, memo } from 'react';
import DatePickerComponent from '@cloudscape-design/components/date-picker';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const DatePicker: FC<DataDrivenFormFieldProps> = (props) => {
    const { input, onBlur, onFocus, ...rest } = props;
    return (
        <DatePickerComponent
            openCalendarAriaLabel={(selectedDate: string | null) =>
                selectedDate ? `, selected date is ${selectedDate}` : 'Choose date'
            }
            nextMonthAriaLabel="Next month"
            previousMonthAriaLabel="Previous month"
            todayAriaLabel="Today"
            {...rest}
            {...input}
            onChange={({ detail }) => input.onChange(detail.value)}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default memo(withDataDrivenFormField(DatePicker));
