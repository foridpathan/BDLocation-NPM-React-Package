import React from 'react'
import Select from 'react-select';
import upazilas from '../../data/bd-upazilas.json'

const Upazilas = ({
    id,
    onChange,
    bn,
    className,
    lable,
    changeLabel,
    placeholder
}) => {
    const dist = upazilas?.upazilas.filter((f) => f.district_id === id)
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
            {(lable === undefined || lable === true) && <label>{changeLabel || (bn ? 'উপজেলা' : 'Upazilas')}</label>}
            <Select
                defaultValue={[]}
                name="customers"
                options={data}
                className={`location-select ${className}`}
                placeholder={`${placeholder || 'Search Upazila'}`}
                onChange={(e) => onChange(e, '')}
            />
        </div>
    );
};

export { Upazilas };