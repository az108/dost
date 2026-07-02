import SwiftUI
import DrDostKit

@main
struct DrDostApp: App {
    var body: some Scene {
        WindowGroup {
            RootView()
        }
    }
}

struct RootView: View {
    @State private var content: SiteContent?
    @State private var failed = false

    var body: some View {
        Group {
            if let content {
                MainTabView(content: content)
            } else if failed {
                ContentUnavailableView(
                    "Inhalte konnten nicht geladen werden",
                    systemImage: "exclamationmark.triangle"
                )
            } else {
                ProgressView()
            }
        }
        .task { load() }
    }

    private func load() {
        guard let url = Bundle.main.url(
            forResource: "content", withExtension: "json", subdirectory: "shared"
        ) else {
            assertionFailure("shared/content.json missing from app bundle")
            failed = true
            return
        }
        do {
            content = try ContentLoader.load(from: url)
        } catch {
            assertionFailure("content.json failed to decode: \(error)")
            failed = true
        }
    }
}
