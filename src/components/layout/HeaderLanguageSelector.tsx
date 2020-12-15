import React from 'react'

import * as NkReactLibrary from 'nk-react-library';

export default function HeaderLanguageSelector() {

    const languageStateKey = 'language';

    const [language, setLanguage] = React.useState(NkReactLibrary.Utils.NkStateManagerUtils.getStateValue(languageStateKey, 'english'));

    React.useEffect(() => {
        NkReactLibrary.Utils.NkStateManagerUtils.addStateListener(languageStateKey, (state: string, value: any) => {
            console.log(state, value);
            setLanguage(value);
        })
    }, [])

    return (
        <NkReactLibrary.Components.NkFormElements.NkDropdown id='language' type='select' valueList={[
            {
                label: 'English',
                value: 'english'
            }, {
                label: 'German',
                value: 'german'
            }, {
                label: 'Spanish',
                value: 'spanish'
            }, {
                label: 'Chinese (Simplified)',
                value: 'chinese'
            }, {
                label: 'Telugu',
                value: 'telugu'
            }, {
                label: 'Kannada',
                value: 'kannada'
            }
        ]} defaultValue={language} valueChanged={(id, value) => {
            NkReactLibrary.Utils.NkStateManagerUtils.setStateValue(languageStateKey, value);
        }} />
    )
}
