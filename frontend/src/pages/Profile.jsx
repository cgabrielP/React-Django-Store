import React, { useState, useEffect } from 'react';
import axios from '../manageAxios/api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/');
            return;
        }

        axios.get('/userDetail/')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    navigate('/');
                } else {
                    setError('No se pudieron cargar los datos del perfil');
                }
            });
    }, []);

    return (
        <div>
            <h2>Perfil del Usuario</h2>
            {error && <p>{error}</p>}
            {profile && (
                <div>
                    <p>Email: {profile.email}</p>
                    <p>Rol: {profile.role}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
