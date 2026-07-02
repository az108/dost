import SwiftUI
import DrDostKit

struct GalerieView: View {
    let images: [GalleryImage]
    @State private var selected: GalleryImage?

    private let columns = [GridItem(.adaptive(minimum: 150), spacing: 8)]

    var body: some View {
        NavigationStack {
            ScrollView {
                LazyVGrid(columns: columns, spacing: 8) {
                    ForEach(images) { image in
                        Button {
                            selected = image
                        } label: {
                            SharedImage(path: image.image)
                                .frame(height: 150)
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                        }
                        .accessibilityLabel(image.alt)
                    }
                }
                .padding()
            }
            .navigationTitle("Galerie")
            .fullScreenCover(item: $selected) { image in
                PhotoViewer(images: images, current: image)
            }
        }
    }
}

struct PhotoViewer: View {
    let images: [GalleryImage]
    @State var current: GalleryImage
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            TabView(selection: $current) {
                ForEach(images) { image in
                    ZoomableImage(path: image.image)
                        .tag(image)
                        .accessibilityLabel(image.alt)
                }
            }
            .tabViewStyle(.page)
            .background(.black)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Schließen") { dismiss() }
                }
            }
        }
    }
}

struct ZoomableImage: View {
    let path: String
    @State private var scale: CGFloat = 1

    var body: some View {
        SharedImage(path: path, contentMode: .fit)
            .scaleEffect(scale)
            .gesture(
                MagnifyGesture()
                    .onChanged { value in scale = max(1, value.magnification) }
                    .onEnded { _ in withAnimation { scale = 1 } }
            )
    }
}
