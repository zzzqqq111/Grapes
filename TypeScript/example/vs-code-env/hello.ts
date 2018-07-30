class BirdWhisperer {
  constructor(private chirping: string) {
      
  }
  chirp() {
      return 'Ah~ oh~ ' + this.chirping;
  }
}
let birdWhisperer = new BirdWhisperer('coo-coo-coo...HTML');
document.body.innerHTML = birdWhisperer.chirp();