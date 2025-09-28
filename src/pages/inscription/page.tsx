
import { useState } from 'react';

export default function Inscription() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    departement: '',
    commune: '',
    arrondissement: '',
    ville: '',
    contactWhatsapp: '',
    centreVote: '',
    photo: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submitData = new URLSearchParams();
      submitData.append('nom', formData.nom);
      submitData.append('prenom', formData.prenom);
      submitData.append('dateNaissance', formData.dateNaissance);
      submitData.append('lieuNaissance', formData.lieuNaissance);
      submitData.append('departement', formData.departement);
      submitData.append('commune', formData.commune);
      submitData.append('arrondissement', formData.arrondissement);
      submitData.append('ville', formData.ville);
      submitData.append('contactWhatsapp', formData.contactWhatsapp);
      submitData.append('centreVote', formData.centreVote);
      submitData.append('photo', formData.photo ? 'Uncollectable' : '');

      const response = await fetch('https://readdy.ai/api/form/d3cql957l1m9ipll06ag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nom: '',
          prenom: '',
          dateNaissance: '',
          lieuNaissance: '',
          departement: '',
          commune: '',
          arrondissement: '',
          ville: '',
          contactWhatsapp: '',
          centreVote: '',
          photo: null
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const departements = [
    'Alibori', 'Atacora', 'Atlantique', 'Borgou', 'Collines', 'Couffo',
    'Donga', 'Littoral', 'Mono', 'Ouémé', 'Plateau', 'Zou'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
      {/* Header */}
      <div className="py-8 px-4" style={{ backgroundColor: '#1a6642' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-4">
            <img 
              src="https://static.readdy.ai/image/da6891ceab452ef6b6e6edf3741c1098/085921503cbe32d543396a6cb82ee9c6.jfif" 
              alt="VEROWA Logo" 
              className="mx-auto w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Inscription</h1>
          <p className="text-xl text-white/90">Enregistrez vos informations personnelles</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="px-8 py-6" style={{ backgroundColor: '#dcac48' }}>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <i className="ri-user-add-line mr-3"></i>
              Formulaire d'Inscription
            </h2>
            <p className="text-white/90 mt-2">Veuillez remplir tous les champs obligatoires</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8" data-readdy-form id="inscription-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Votre nom de famille"
                />
              </div>

              {/* Prénom */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Votre prénom"
                />
              </div>

              {/* Date de naissance */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Date de naissance *
                </label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                />
              </div>

              {/* Lieu de naissance */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Lieu de naissance *
                </label>
                <input
                  type="text"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Ville ou commune de naissance"
                />
              </div>

              {/* Département */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Département *
                </label>
                <div className="relative">
                  <select
                    name="departement"
                    value={formData.departement}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors appearance-none cursor-pointer"
                    style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  >
                    <option value="">Sélectionnez un département</option>
                    {departements.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ color: '#b68538' }}></i>
                </div>
              </div>

              {/* Commune */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Commune *
                </label>
                <input
                  type="text"
                  name="commune"
                  value={formData.commune}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Votre commune"
                />
              </div>

              {/* Arrondissement */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Arrondissement *
                </label>
                <input
                  type="text"
                  name="arrondissement"
                  value={formData.arrondissement}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Votre arrondissement"
                />
              </div>

              {/* Ville/Village */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Ville/Village *
                </label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Votre ville ou village"
                />
              </div>

              {/* Contact WhatsApp */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Contact WhatsApp *
                </label>
                <input
                  type="tel"
                  name="contactWhatsapp"
                  value={formData.contactWhatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="+229 XX XX XX XX"
                />
              </div>

              {/* Centre de vote */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Centre de vote *
                </label>
                <input
                  type="text"
                  name="centreVote"
                  value={formData.centreVote}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}
                  placeholder="Nom de votre centre de vote"
                />
              </div>

              {/* Photo */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1a6642' }}>
                  Photo d'identité *
                </label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center transition-colors hover:border-opacity-100" style={{ borderColor: '#dcac48', backgroundColor: '#f7f7f7' }}>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <i className="ri-camera-line text-4xl mb-3 block" style={{ color: '#b68538' }}></i>
                    <p className="text-sm font-medium" style={{ color: '#1a6642' }}>
                      {formData.photo ? formData.photo.name : 'Cliquez pour télécharger votre photo'}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#b68538' }}>
                      Formats acceptés: JPG, PNG (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 rounded-lg flex items-center" style={{ backgroundColor: '#1a6642' }}>
                <i className="ri-check-circle-line text-white text-xl mr-3"></i>
                <p className="text-white font-medium">Inscription réussie ! Vos informations ont été enregistrées.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 rounded-lg flex items-center" style={{ backgroundColor: '#b9232e' }}>
                <i className="ri-error-warning-line text-white text-xl mr-3"></i>
                <p className="text-white font-medium">Erreur lors de l'inscription. Veuillez réessayer.</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                style={{ backgroundColor: isSubmitting ? '#b68538' : '#1a6642' }}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Inscription en cours...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    S'inscrire
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcac48' }}>
              <i className="ri-shield-check-line text-2xl text-white"></i>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#1a6642' }}>Sécurisé</h3>
            <p className="text-sm" style={{ color: '#b68538' }}>Vos données sont protégées et sécurisées</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#b68538' }}>
              <i className="ri-time-line text-2xl text-white"></i>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#1a6642' }}>Rapide</h3>
            <p className="text-sm" style={{ color: '#b68538' }}>Inscription en quelques minutes seulement</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1a6642' }}>
              <i className="ri-customer-service-2-line text-2xl text-white"></i>
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#1a6642' }}>Support</h3>
            <p className="text-sm" style={{ color: '#b68538' }}>Assistance disponible 24h/24</p>
          </div>
        </div>
      </div>
    </div>
  );
}
