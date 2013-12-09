nback
=====

JavaScript Implementation of the PNAS Dual N-Back Psychological Study: http://www.pnas.org/content/105/19/6829.full.pdf+html

This code uses jQuery for keypresses and UI, as well as howler.js for cross-browser audio playback.

Dual N-Back is based on the concepts in the above study. A square is flashed in one of 8 positions on a screen, and simultaneously one of 8 consonants is played back in the participant's ear. The user must press a key if the visual cue matches the one presented n times before, and another key if the audio cue matches in the same way. Over time the value of n is increased, as is the difficulty of the game. In studies this sort of training has been shown to increase scores on tests of fluid intelligence. These concepts are largely the basis for the slew of fad "brain training" websites that have been cropping up.

As of now the code is still very buggy and some kinks need to be worked out of the scoring mechanism before I deploy it on my website.