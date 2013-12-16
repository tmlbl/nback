nback
=====

JavaScript Implementation of the PNAS Dual N-Back Psychological Study: http://www.pnas.org/content/105/19/6829.full.pdf+html

This code uses jQuery for keypresses and UI, Pure for button styling, and howler.js for cross-browser audio playback. The audio clips are from the freesound.org set "The Alphabet" by user Corsica_S.

Dual N-Back is based on the concepts in the above study. A square is flashed in one of 8 positions on a screen, and simultaneously one of 8 consonants is played back in the participant's ear. The user must press a key if the visual cue matches the one presented n times before, and another key if the audio cue matches in the same way. Over time the value of n is increased, as is the difficulty of the game. In studies this sort of training has been shown to increase scores on tests of fluid intelligence. These concepts are largely the basis for the slew of fad "brain training" websites that have been cropping up.

Check out the live demo at http://corporationenterprises.com/nback/
