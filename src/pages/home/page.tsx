
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f7f9' }}>
      {/* Header with Background Image */}
      <div 
        className="py-16 px-4 relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://static.readdy.ai/image/da6891ceab452ef6b6e6edf3741c1098/dc1b62a1a7e03ae3229690bfd91b0a29.png)',
          minHeight: '600px'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="https://static.readdy.ai/image/da6891ceab452ef6b6e6edf3741c1098/085921503cbe32d543396a6cb82ee9c6.jfif" 
              alt="VEROWA Logo" 
              className="mx-auto w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Plateforme d'Inscription à VEROWA</h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">Enregistrez-vous facilement et rapidement</p>
          <Link 
            to="/inscription"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: '#dcac48' }}
          >
            <i className="ri-user-add-line mr-2"></i>
            Commencer l'inscription
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a6642' }}>Pourquoi s'inscrire ?</h2>
          <div className="text-lg leading-relaxed space-y-4" style={{ color: '#b68538' }}>
            <p>
              L'inscription sur notre plateforme VEROWA vous permet de participer activement à la vie démocratique de votre communauté. 
              En vous enregistrant, vous contribuez à un processus transparent et organisé qui facilite la gestion des informations citoyennes.
            </p>
            <p>
              Votre inscription nous aide à mieux vous connaître et à vous fournir les services adaptés à votre localisation. 
              Grâce aux informations que vous partagez, nous pouvons vous orienter vers le bon centre de vote et maintenir 
              une communication efficace via WhatsApp.
            </p>
            <p>
              Rejoignez une communauté engagée et participez à la construction d'un avenir meilleur pour tous. 
              Votre voix compte, et votre inscription est le premier pas vers une participation citoyenne active.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#dcac48' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à vous inscrire ?</h2>
          <p className="text-xl text-white/90 mb-8">Le processus ne prend que quelques minutes</p>
          <Link 
            to="/inscription"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
            style={{ backgroundColor: '#1a6642', color: 'white' }}
          >
            <i className="ri-arrow-right-line mr-2"></i>
            Commencer maintenant
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4" style={{ backgroundColor: '#1a6642' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <img 
              src="https://static.readdy.ai/image/da6891ceab452ef6b6e6edf3741c1098/085921503cbe32d543396a6cb82ee9c6.jfif" 
              alt="VEROWA Logo" 
              className="mx-auto w-16 h-16 object-contain"
            />
          </div>
          <p className="text-white/80 text-sm">
            © 2025 VEROWA - Plateforme d'Inscription. Tous droits réservés. | 
            <a href="https://readdy.ai/?origin=logo" className="text-white hover:text-white/80 ml-1 cursor-pointer">
              Powered by Readdy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}