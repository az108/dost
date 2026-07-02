import SwiftUI
import DrDostKit

struct MainTabView: View {
    let content: SiteContent

    var body: some View {
        TabView {
            StartView(content: content)
                .tabItem { Label("Start", systemImage: "house") }
            TopicListView(title: "Behandlungen", topics: content.behandlungen)
                .tabItem { Label("Behandlungen", systemImage: "cross.case") }
            TopicListView(title: "Fachbereiche", topics: content.fachbereiche)
                .tabItem { Label("Fachbereiche", systemImage: "stethoscope") }
            GalerieView(images: content.galerie)
                .tabItem { Label("Galerie", systemImage: "photo.on.rectangle") }
            InfoView(content: content)
                .tabItem { Label("Info", systemImage: "info.circle") }
        }
    }
}
