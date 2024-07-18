export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      candidates: {
        Row: {
          account_id: string
          avatar_url: string | null
          bio: string | null
          created_at: string
          embedding: string | null
          gps: unknown | null
          id: number
          name: string
          period: string
          vibe_check: Json | null
          vying_for: Database["public"]["Enums"]["positions"]
        }
        Insert: {
          account_id?: string
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          embedding?: string | null
          gps?: unknown | null
          id?: number
          name: string
          period: string
          vibe_check?: Json | null
          vying_for: Database["public"]["Enums"]["positions"]
        }
        Update: {
          account_id?: string
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          embedding?: string | null
          gps?: unknown | null
          id?: number
          name?: string
          period?: string
          vibe_check?: Json | null
          vying_for?: Database["public"]["Enums"]["positions"]
        }
        Relationships: [
          {
            foreignKeyName: "candidates_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      constituencies: {
        Row: {
          contribution_status: Database["public"]["Enums"]["contribution_status"]
          county_id: number | null
          created_at: string
          entry_contributed_by: string
          entry_verified_by: string | null
          gps: unknown | null
          id: number
          name: string
        }
        Insert: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          county_id?: number | null
          created_at?: string
          entry_contributed_by: string
          entry_verified_by?: string | null
          gps?: unknown | null
          id?: number
          name: string
        }
        Update: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          county_id?: number | null
          created_at?: string
          entry_contributed_by?: string
          entry_verified_by?: string | null
          gps?: unknown | null
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "constituencies_county_id_fkey"
            columns: ["county_id"]
            isOneToOne: false
            referencedRelation: "counties"
            referencedColumns: ["id"]
          },
        ]
      }
      counties: {
        Row: {
          contribution_status: Database["public"]["Enums"]["contribution_status"]
          created_at: string
          entry_contributed_by: string
          entry_verified_by: string | null
          gps: unknown | null
          id: number
          name: string
        }
        Insert: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by: string
          entry_verified_by?: string | null
          gps?: unknown | null
          id?: number
          name: string
        }
        Update: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by?: string
          entry_verified_by?: string | null
          gps?: unknown | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      governors: {
        Row: {
          contribution_status: Database["public"]["Enums"]["contribution_status"]
          county_id: number | null
          created_at: string
          entry_contributed_by: string
          entry_verified_by: string | null
          from: string
          id: number
          name: string
          to: string | null
        }
        Insert: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          county_id?: number | null
          created_at?: string
          entry_contributed_by: string
          entry_verified_by?: string | null
          from: string
          id?: number
          name: string
          to?: string | null
        }
        Update: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          county_id?: number | null
          created_at?: string
          entry_contributed_by?: string
          entry_verified_by?: string | null
          from?: string
          id?: number
          name?: string
          to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "governors_county_id_fkey"
            columns: ["county_id"]
            isOneToOne: false
            referencedRelation: "counties"
            referencedColumns: ["id"]
          },
        ]
      }
      mcas: {
        Row: {
          contribution_status: Database["public"]["Enums"]["contribution_status"]
          created_at: string
          entry_contributed_by: string
          entry_verified_by: string | null
          from: string
          id: number
          name: string
          to: string | null
          ward_id: number | null
        }
        Insert: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by: string
          entry_verified_by?: string | null
          from: string
          id?: number
          name: string
          to?: string | null
          ward_id?: number | null
        }
        Update: {
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by?: string
          entry_verified_by?: string | null
          from?: string
          id?: number
          name?: string
          to?: string | null
          ward_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mcas_ward_id_fkey"
            columns: ["ward_id"]
            isOneToOne: false
            referencedRelation: "wards"
            referencedColumns: ["id"]
          },
        ]
      }
      mps: {
        Row: {
          contituency_id: number | null
          contribution_status: Database["public"]["Enums"]["contribution_status"]
          created_at: string
          entry_contributed_by: string | null
          entry_verified_by: string | null
          from: string
          id: number
          name: string
          to: string | null
        }
        Insert: {
          contituency_id?: number | null
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by?: string | null
          entry_verified_by?: string | null
          from: string
          id?: number
          name: string
          to?: string | null
        }
        Update: {
          contituency_id?: number | null
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by?: string | null
          entry_verified_by?: string | null
          from?: string
          id?: number
          name?: string
          to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mps_contituency_id_fkey"
            columns: ["contituency_id"]
            isOneToOne: false
            referencedRelation: "constituencies"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          email: string | null
          fullname: string | null
          gps: unknown | null
          id: string
          username: string | null
          vibe_check: Json | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string | null
          fullname?: string | null
          gps?: unknown | null
          id?: string
          username?: string | null
          vibe_check?: Json | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string | null
          fullname?: string | null
          gps?: unknown | null
          id?: string
          username?: string | null
          vibe_check?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      wards: {
        Row: {
          constituency_id: number
          contribution_status: Database["public"]["Enums"]["contribution_status"]
          created_at: string
          entry_contributed_by: string
          entry_verified_by: string | null
          gps: unknown | null
          id: number
          name: string
        }
        Insert: {
          constituency_id: number
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by?: string
          entry_verified_by?: string | null
          gps?: unknown | null
          id?: number
          name: string
        }
        Update: {
          constituency_id?: number
          contribution_status?: Database["public"]["Enums"]["contribution_status"]
          created_at?: string
          entry_contributed_by?: string
          entry_verified_by?: string | null
          gps?: unknown | null
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "wards_constituency_id_fkey"
            columns: ["constituency_id"]
            isOneToOne: false
            referencedRelation: "constituencies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
        }
        Returns: boolean
      }
      custom_access_token_hook: {
        Args: {
          event: Json
        }
        Returns: Json
      }
    }
    Enums: {
      app_permission: "common.update" | "common.delete"
      app_role: "admin" | "moderator"
      contribution_status: "pending" | "verified"
      positions: "mca" | "mp" | "governor" | "president"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
