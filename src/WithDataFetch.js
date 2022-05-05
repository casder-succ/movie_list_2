import React, {useEffect, useState} from 'react';

const WithDataFetch = (Component) => {
    const WithDataFetch = (props) => {
        const APIKey = '1163289e-3479-4372-9d63-b8233ef3e6b4'
        const [loading, setLoading] = useState(true);
        const [errorMessage, setErrorMessage] = useState('');
        const [data, setData] = useState({});

        useEffect(() => {
            const dataFetch = async (path, key) => {
                try {
                    const data = await fetch(path, {
                        method: 'GET',
                        headers: {
                            'X-API-KEY': APIKey,
                            'Content-Type': 'application/json',
                        },
                    });
                    const dataJSON = await data.json();

                    if (dataJSON) {
                        setData(dataJSON);
                        setLoading(false);
                    }
                } catch (e) {
                    setErrorMessage(e);
                }
            };

            dataFetch(props.dataSource);
        }, [props.dataSource]);

        return (
            <Component
                loading={loading}
                data={data}
                error={errorMessage}
                {...props}
            />
        );
    };

    WithDataFetch.displayName = `WithDataFetch${Component.name}`;
    return WithDataFetch;
};

export default WithDataFetch;