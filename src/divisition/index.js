import React from 'react'
import Select from 'react-select';
import divisions from '../../data/bd-divisions.json'

const Divisions = ({
    onChange,
    bn,
    className,
    lable,
    changeLabel,
    placeholder
}) => {
    // const [data, setData] = useState([])

    // useEffect(() => {
    const data = [];
    for (let i = 0; i < divisions?.divisions.length; i++) {
        data.push({
            ...divisions?.divisions[i],
            label: bn ? divisions?.divisions[i].bn_name : divisions?.divisions[i].name,
            value: divisions?.divisions[i].id
        });
    }
    // setData(data);
    // }, [divisions])

    return (
        <div className='form-location'>
            {(lable === undefined || lable === true) && <label>{changeLabel || (bn ? 'বিভাগ' : 'Divisions')}</label>}
            <Select
                defaultValue={[]}
                name="customers"
                options={data}
                className={`location-select ${className}`}
                placeholder={`${placeholder || 'Search region'}`}
                onChange={(e) => onChange(e, 'division')}
            />
        </div>
    );
};

export { Divisions };