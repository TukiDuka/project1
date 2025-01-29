import React from 'react';
import WinterCollection from '../../components/WinterCollection';
import Layout from '../../components/layout';

const LastCollection = () => {
    return (
        <div>
            <Layout>
            <WinterCollection />
                <WinterCollection />
            </Layout>


        </div>
    );
}

export default LastCollection;

