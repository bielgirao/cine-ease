import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Modal from '../ui/Modal/Modal';

const CastCarousel = ({ cast }) => {
    const [selectedActor, setSelectedActor] = useState(null);

    const handleActorClick = (actor) => {
        setSelectedActor(actor);
    };
    
    const handleCloseModal = () => {
        setSelectedActor(null);
    };

    const settings = {
        spaceBetween: 10,
        slidesPerView: 'auto',
        speed: 800,
        pagination: {
            dynamicBullets: true,
        },
        autoplay: {
            delay: 5000,
        },
        modules: [Pagination, Autoplay]
    };

    return (
        <>
            <Swiper {...settings}>
                {cast.map((actor, index) => (
                    <SwiperSlide key={index}
                        style={{
                            width: '80px',
                        }}>
                        {actor.profile_path ? (
                             <img 
                             src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} 
                             alt={actor.name}
                             title={actor.name}
                             style={{
                                 width: '80px',
                                 height: '80px',
                                 borderRadius: '100%',
                                 objectFit: 'cover',
                                 cursor: 'pointer'
                             }}
                             onClick={() => handleActorClick(actor)}    
                         />        
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '80px',
                                    height: '80px',
                                    background: '#2C2E35',
                                    borderRadius: '100%',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    fontSize: '10px',
                                    textAlign: 'center',
                                    wordBreak: 'break-word',
                                    padding: '10px'
                                }}
                            >
                                {actor.name}
                            </div>
                        )}         
                    </SwiperSlide>
                ))}
            </Swiper>
            <Modal isOpen={!!selectedActor} onClose={handleCloseModal}>
                {selectedActor && (
                    <>
                        <h2>{selectedActor.name}</h2>
                        <p><b>Gender:</b> {selectedActor.gender === 1 ? 'Female' : 'Male'}</p>
                        <p><b>Character:</b>  {selectedActor.character}</p>
                    </>
                )}
            </Modal> 
        </>
    );
};

export default CastCarousel;