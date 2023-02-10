import { Amplify, } from 'aws-amplify';
import {
    Authenticator,
    Heading,
    useTheme,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

export default function App({ Component }) {

    Amplify.configure(awsExports);

    const formFields = {
        signIn: {
            username: {
                placeholder: 'Enter your username',
            },
        },
    };

    const components = {
        Header() {
            return <></>
        },
        Footer() {
            return <></>
        },
        SignIn: {
            Header() {
                const { tokens } = useTheme();

                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={3}
                    >
                        Sign in
                    </Heading>
                )
            },
            Footer() {
                return  <></>
            },
        },
    };

    return (
        <Authenticator
            formFields={formFields}
            components={components}
            hideSignUp={true}
        >
            {({ signOut, user }) => (
                <>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                    <Component />
                </>
            )}
        </Authenticator>
    )
}
