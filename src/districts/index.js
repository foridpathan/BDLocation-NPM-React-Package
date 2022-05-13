import React from 'react'
import Select from 'react-select';
import districts from '../../data/bd-districts.json'

const Districts = ({
    id,
    onChange,
    bn,
    className,
    lable,
    changeLabel,
    placeholder
}) => {
    const dist = districts?.districts.filter((f) => f.division_id === id)
    const data = [];
    for (let i = 0; i < dist.length; i++) {
        data.push({
            ...dist[i],
            label: bn ? dist[i].bn_name : dist[i].name,
            value: dist[i].id
        });
    }
    
    return (
        <div className='form-location'>
            { (lable === undefined || lable === true) && <label>{changeLabel || (bn ? 'জেলা' : 'Districts')}</label>}
            <Select
                defaultValue={[]}
                name="customers"
                options={data}
                className={`location-select ${className}`}
                placeholder={`${placeholder || 'Search district'}`}
                onChange={(e) => onChange(e, 'district')}
            />
        </div>
    );
};

export default Districts;