        // สร้างรูปทรงลอย
        function createFloatingShapes() {
            const shapesContainer = document.querySelector('.floating-shapes');
            
            setInterval(() => {
                const shape = document.createElement('div');
                shape.className = 'shape';
                
                const size = Math.random() * 50 + 10;
                shape.style.width = size + 'px';
                shape.style.height = size + 'px';
                shape.style.left = Math.random() * 100 + '%';
                shape.style.animationDuration = (Math.random() * 10 + 10) + 's';
                shape.style.animationDelay = Math.random() * 2 + 's';
                
                shapesContainer.appendChild(shape);
                
                setTimeout(() => {
                    shape.remove();
                }, 20000);
            }, 1000);
        }

        // แสดงข้อมูลเกม
        function showGameInfo(title, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('gameModal').style.display = 'block';
        }

        // เริ่มเกม
        function startGame() {
            alert('🎮 กำลังเริ่มเกม... ขอบคุณที่เล่น Quizfood!');
            document.getElementById('gameModal').style.display = 'none';
        }

        // ปิด Modal
        document.querySelector('.close').onclick = function() {
            document.getElementById('gameModal').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('gameModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // เพิ่มเอฟเฟกต์ hover บนการ์ด
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.game-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '1';
                });
            });

            // เริ่มแอนิเมชั่น
            createFloatingShapes();
            setTimeout(animateStats, 500);
        });

        // เพิ่มปุ่ม scroll to top
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                if (!document.querySelector('.scroll-top')) {
                    const scrollBtn = document.createElement('div');
                    scrollBtn.className = 'scroll-top';
                    scrollBtn.innerHTML = '↑';
                    scrollBtn.style.cssText = `
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        width: 50px;
                        height: 50px;
                        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 20px;
                        font-weight: bold;
                        box-shadow: 0 4px 15px rgba(255,107,107,0.3);
                        transition: all 0.3s ease;
                        z-index: 1000;
                    `;
                    
                    scrollBtn.addEventListener('click', function() {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                    
                    scrollBtn.addEventListener('mouseenter', function() {
                        this.style.transform = 'scale(1.1)';
                    });
                    
                    scrollBtn.addEventListener('mouseleave', function() {
                        this.style.transform = 'scale(1)';
                    });
                    
                    document.body.appendChild(scrollBtn);
                }
            } else {
                const scrollBtn = document.querySelector('.scroll-top');
                if (scrollBtn) {
                    scrollBtn.remove();
                }
            }
        });