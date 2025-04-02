import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
    nom: string;
    email: string;
    message: string;
    telephone: string; // Champ téléphone
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        email: '',
        message: '',
        telephone: '', // Initialisation du champ téléphone
    });
    const [isLoading, setIsLoading] = useState(false);
    const [telephoneError, setTelephoneError] = useState(''); // Pour gérer les erreurs de téléphone

    // Fonction de validation pour le téléphone
    const validatePhoneNumber = (number: string) => {
        const phoneRegex = /^[0-9]{10}$/; // Vérifie que le numéro est composé de 10 chiffres
        return phoneRegex.test(number);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation du numéro de téléphone
        if (!validatePhoneNumber(formData.telephone)) {
            setTelephoneError('Le numéro de téléphone doit contenir 10 chiffres.');
            return;
        } else {
            setTelephoneError('');
        }

        setIsLoading(true);

        try {
            const result = await emailjs.send(
                'service_bw6i2o5',
                'template_0w73hhf',
                {
                    from_name: formData.nom,
                    from_email: formData.email,
                    message: formData.message,
                    from_telephone: formData.telephone, // Envoi du téléphone avec les autres données
                },
                '0eeR1Pfxc5U4bzLao' // Remplacer par ta clé publique EmailJS
            );

            if (result.status === 200) {
                toast.success('Message envoyé avec succès!');
                // Réinitialisation du formulaire et de l'erreur
                setFormData({ nom: '', email: '', message: '', telephone: '' });
                setTelephoneError('');
            }
        } catch (error) {
            toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            console.error('EmailJS error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black mb-6">Une question ?</h1>
                    <p className="text-xl text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        Je vous invite à me laisser vos coordonnées pour que je puisse
                        vous apporter une réponse personnalisée.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                                placeholder="Nom"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                                placeholder="E-mail"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                            placeholder="Numéro de téléphone"
                            required
                            disabled={isLoading}
                        />
                        {telephoneError && (
                            <p className="text-red-500 text-sm mt-2">{telephoneError}</p>
                        )}
                    </div>

                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 transition-colors h-40 resize-none"
                            placeholder="Message"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-purple-200 hover:bg-purple-300 text-black px-8 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>ENVOYER</span>
                            {isLoading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <ArrowRight className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </form>

                <div className="mt-12 flex justify-between text-sm text-gray-600">
                    <a href="#" className="hover:text-purple-600 transition-colors">Mention légales</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">Politique de confidentialité</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">CGV</a>
                </div>
                <Toaster position="bottom-right" />
            </div>
        </div>
    );
}
