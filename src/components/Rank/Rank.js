import React from 'react';
import './Rank.css';

const Rank = ({ langArray, onTopicClick, checkbox }) => {
    const isChecked = lang => {
        if (checkbox === undefined && lang === langArray[0]) return true;
        if (checkbox === lang ) return true;
    };

    function addLang(lang) {
        const id = Math.random();
        return (
            <div key={ lang + id } className="pretty p-icon p-pulse p-round p-bigger lang-controls">
                <input
                    id={ lang }
                    type="checkbox"
                    defaultChecked={ isChecked(lang, checkbox) }
                    onChange={ () => onTopicClick(lang) }
                />
                <div className="state p-warning">
                <i className="icon material-icons"></i>
                    <label htmlFor={ lang }>{ lang }</label>
                </div>
            </div>
        );
    }

    return <div className="ranked-langs">{ langArray.map(addLang) }</div>
};

export default React.memo(Rank);