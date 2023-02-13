import { Amplify, } from 'aws-amplify';
import {
    Authenticator,
    Heading,
    useTheme,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import Meta from '@app/Meta';

export default function App({ Component }) {

    Amplify.configure(awsExports);

    const formFields = {
        signIn: {
            username: {
                placeholder: 'Enter your username',
            },
            password: {
                placeholder: 'Enter your password',
            },
        },
    };

    const components = {
        SignIn: {
            Header() {
                const { tokens } = useTheme();

                return (
                    <Heading
                        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                        level={5}
                    >
                        Sign in to view EC2 Dashboard
                    </Heading>
                )
            },
            // hide forget password flow
            Footer() {
                return <></>;
            },
        },
    };

    return (
        <>
            <Meta />
            <Authenticator
                formFields={formFields}
                components={components}
                hideSignUp={true}
            >
                {({ signOut, user }) => (
                    <Component signOut={signOut} username={user.username}/>
                )}
            </Authenticator>
        </>
    )
}
