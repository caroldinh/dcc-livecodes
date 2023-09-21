// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// ee_5 . FUGITIVE GEOMETRY VHS . audioreactive shapes and gradients
// e_e // @eerie_ear
// 
s = () => shape(6, 0.5, 0.05)
	.scrollX([-0.107, -0.12, 0.3, -0.1, -0.1].smooth(0.112)
		.fast(0.15))
	.scrollY([0.25, -0.2, 0.3, -0.1, 0.2].smooth(0.9)
		.fast(0.15));
// 
solid()
	.add(gradient(3, 1.5)
		.rotate(0.05, -0.2)
		.posterize(2)
		.contrast(1.2), [1, 0, 1, 0.328, 0, 0.6].smooth(0.9))
	.add(s())
	.mult(s()
		.scale(1.591)
		.scrollX(0.004)
		.scrollY(-0.01)
		.rotate(0.186, 0.06)
		.add(gradient(3)
			.contrast(0.6), [1, 0, 1.403, 0.5].smooth(0.297), 0.315)
		.mult(src(o0)
			.scale(0.98), () => a.fft[0] * 9))
	.diff(s()
		.modulate(shape(1200))
		.scale([2.887, 1.2].smooth(0.9)
			.fast(0.05)))
	.add(gradient(2)
		.invert(), () => a.fft[2])
	.mult(gradient(() => a.fft[3] * 6.953))
	.blend(src(o0, () => a.fft[1] * 40))
	.add(voronoi(() => a.fft[1], () => a.fft[3], () => a.fft[0])
		.thresh(0.7)
		.posterize(2.082, 6.083)
		.luma(0.9)
		.scrollY(1, () => a.fft[0] / 53.194)
		.colorama(3)
		.thresh(() => a.fft[1])
		.scale(() => a.fft[3] * 2), () => a.fft[0] / 2)
	.out();
// 
speed = 4;
a.setSmooth(0.96);
