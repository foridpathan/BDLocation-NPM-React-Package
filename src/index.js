import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Districts from './districts';
import { Divisions } from './divisition';
import { Upazilas } from './upazilas';

const BDLocations = ({
    onChange,
    bn,
    className,
    showLable,
    label,
    placeholder
}) => {
    const [selected, setSelected] = useState({
        division: [],
        district: []
    })
    const onChangeHandler = (e, location) => {
        if (location === 'division')
            setSelected({
                ...selected,
                division: e
            })
        if (location === 'district')
            setSelected({
                ...selected,
                district: e
            })
        onChange && onChange(e)
    }

    return (
        <div className='dblocation'>
            <Divisions
                bn={bn}
                lable={showLable}
                className={className}
                changeLabel={label?.division}
                placeholder={placeholder?.division}
                onChange={(e, location) => onChangeHandler(e, location)} />
            {selected.division &&
                Object.keys(selected.division).length > 0 &&
                <Districts
                    bn={bn}
                    lable={showLable}
                    className={className}
                    id={selected.division?.id}
                    onChange={(e, location) => onChangeHandler(e, location)}
                    changeLabel={label?.district}
                    placeholder={placeholder?.district}
                />}
            {selected.district &&
                Object.keys(selected.district).length > 0 &&
                <Upazilas
                    bn={bn}
                    lable={showLable}
                    className={className}
                    id={selected.district?.id}
                    onChange={(e, location) => onChangeHandler(e, location)}
                    changeLabel={label?.upazila}
                    placeholder={placeholder?.upazila}
                />}
        </div>
    );
};

BDLocations.propTypes = {
    onChange: PropTypes.func,
    bn: PropTypes.bool,
    className: PropTypes.string,
    showLable: PropTypes.bool,
    label: PropTypes.shape({
        division: PropTypes.string,
        district: PropTypes.string,
        upazila: PropTypes.string,
    }),
    placeholder: PropTypes.shape({
        division: PropTypes.string,
        district: PropTypes.string,
        upazila: PropTypes.string,
    }),
}

export { BDLocations };