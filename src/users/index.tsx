import { Datagrid, List, TextField, ResourceComponentInjectedProps, Create, SimpleForm, TextInput } from "react-admin"; 

export const UserList = (props: ResourceComponentInjectedProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
        </Datagrid>
    </List>
);

export const UserCreate = (props: ResourceComponentInjectedProps) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="username" />
        </SimpleForm>
    </Create>
);